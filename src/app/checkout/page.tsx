"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCartStore } from "@/store/cart-store";
import { checkoutAction } from "./checkoutAction";
import Link from "next/link";

import Image from "next/image";

export default function CheckoutPage() {
  const { items, removeItem, addItem, clearCart } = useCartStore();
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (total === 0 || items.length === 0) {
    
    return (
      <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12 ">
        <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Your Cart is Empty
            </h2>
            <p className="text-neutral-600">
              Explore our products.
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                Browse All Products
              </Link>
            </Button>
          </div>
           <Image
          src="/images/test.png"    
          alt="Carrito vacío"
          width={450}
          height={450}
          className="rounded object-contain"
        />
         
        </div>
      </section>
     
    </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
       <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>
       <Card className="max-w-md mx-auto mb-8">
        <CardHeader>
           <CardTitle className="text-xl font-bold">Order Summary</CardTitle>
        </CardHeader>
         <CardContent>
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item.id} className="flex flex-col gap-2 border-b pb-2">
                <div className="flex justify-between">
                  <span className="font-medium">{item.name}</span>
                  <span className="font-semibold">
                    ${((item.price * item.quantity) / 100).toFixed(2)}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => removeItem(item.id)}
                  >
                    –
                  </Button>
                  <span className="text-lg font-semibold">{item.quantity}</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => addItem({ ...item, quantity: 1 })}
                  >
                    +
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-4 border-t pt-2 text-lg font-semibold">
            Total: ${(total / 100).toFixed(2)}
          </div>
        </CardContent>
      </Card>
      <form action={checkoutAction} className="max-w-md mx-auto">
        <input type="hidden" name="items" value={JSON.stringify(items)} />
        <Button type="submit" variant="default" className="w-full mb-4">
          Proceed to Payment
        </Button> 
        <Button onClick={() => clearCart()} variant="default"  className="w-full ">Clear the Cart</Button>
      </form>
    </div>
  );
}
