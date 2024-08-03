<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Srmklive\PayPal\Services\PayPal as PayPalClient;
use App\Models\Order;
use App\Models\OrderItem;

class PayPalController extends Controller
{
    // PayPalController.php

public function checkout(Request $request)
{
    // Retrieve cart items and user info from the request or session
    $cartItems = $request->session()->get('cart');
    $user = auth()->user();

    // Create a new order
    $order = Order::create([
        'user_id' => $user->id,
        'total' => $this->calculateTotal($cartItems), // Define a method to calculate the total amount
    ]);

    // Create order items
    foreach ($cartItems as $item) {
        OrderItem::create([
            'order_id' => $order->id,
            'product_id' => $item['product_id'],
            'quantity' => $item['quantity'],
            'price' => $item['price'],
        ]);
    }

    // Proceed with PayPal payment setup
    $provider = new PayPalClient;
    $provider->setApiCredentials(config('paypal'));
    $paypalToken = $provider->getAccessToken();
    $provider->setAccessToken($paypalToken);

    $response = $provider->createOrder([
        "intent" => "CAPTURE",
        "purchase_units" => [
            [
                "amount" => [
                    "currency_code" => "USD",
                    "value" => $order->total,
                ]
            ]
        ],
        "application_context" => [
            "cancel_url" => route('paypal.cancel'),
            "return_url" => route('paypal.status', ['order' => $order->id]),
        ]
    ]);

    return redirect($response['links'][1]['href']);
}

private function calculateTotal($cartItems)
{
    return array_reduce($cartItems, function ($total, $item) {
        return $total + $item['price'] * $item['quantity'];
    }, 0);
}


    public function cancel()
    {
        // Payment was cancelled
        return redirect()->route('home')->with('error', 'Payment cancelled.');
    }
    // PayPalController.php

    public function status(Request $request)
    {
        $provider = new PayPalClient;
        $provider->setApiCredentials(config('paypal'));
        $provider->getAccessToken();

        $response = $provider->capturePaymentOrder($request['token']);

        if ($response['status'] == 'COMPLETED') {
            $orderId = $request->input('order');
            $order = Order::find($orderId);
            $order->status = 'completed';
            $order->save();

            // Generate a download link
            $downloadLink = $this->generateDownloadLink($order);

            // Option 1: Redirect with the download link (for SSR)
            return redirect()->route('home')->with('success', 'Payment successful.')->with('downloadLink', $downloadLink);

            // Option 2: Return the download link in an API response (for SPA)
            // return response()->json(['success' => true, 'downloadLink' => $downloadLink]);
        }

        return redirect()->route('home')->with('error', 'Payment failed.');
    }

private function generateDownloadLink($order)
{
    // Assuming you have a method to create a zip file for the order's products
    $zipFilePath = $this->createZipFileForOrder($order);
    return route('download', ['file' => basename($zipFilePath)]);
}

private function createZipFileForOrder($order)
{
    $zip = new \ZipArchive();
    $zipFileName = sprintf("%s/orders/%d.zip", storage_path("app/public"), $order->id);

    if ($zip->open($zipFileName, \ZipArchive::CREATE) === TRUE) {
        foreach ($order->items as $item) {
            $product = $item->product;
            // Assuming each product has a `file_path` attribute
            $zip->addFile(sprintf("%s/%s", storage_path("app/public"), $product->file_path), basename($product->file_path));
        }
        $zip->close();
    }

    return $zipFileName;
}

}
