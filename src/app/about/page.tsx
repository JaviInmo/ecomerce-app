import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function DeliveryHero() {
  return (
    <section className="rounded bg-neutral-100 py-8 sm:py-12">
      <div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
        {/* Text content */}
        <div className="max-w-md space-y-4">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Enjoy the Best Flavors at Home!
          </h2>
          <p className="text-neutral-600">
            At <span className="font-semibold">La Cocina Express</span>, we prepare your
            favorite dishes with fresh ingredients and deliver them straight to your door
            in under 30 minutes. Explore our menu and experience gourmet meals without
            leaving your home.
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

        {/* Restaurant image */}
        <Image
          src="/images/restaurant.jpg"
          alt="Dishes from La Cocina Express"
          width={450}
          height={450}
          className="rounded object-cover"
        />
      </div>
    </section>
  );
}
