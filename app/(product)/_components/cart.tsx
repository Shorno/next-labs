"use client"
import {Button} from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import {ShoppingCartIcon} from "lucide-react";
import {useCartActions, useCartIsOpen, useCartItems, useCartTotalQuantity} from "@/store/cartStore";
import SingleCartItem from "@/app/(product)/_components/single-cart-item";
import {Badge} from "@/components/ui/badge";

export default function Cart() {
    const cart = useCartItems()
    const totalQuantity = useCartTotalQuantity()

    console.log(totalQuantity)
    const isCartOpen = useCartIsOpen()
    const {setIsOpen} = useCartActions()

    return (
        <Sheet open={isCartOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
                <Button variant={"outline"} size="sm" className="shrink-0 relative">
                    <ShoppingCartIcon className="h-5 w-5"/>
                    {totalQuantity > 0 && (
                        <Badge
                            className="absolute bg-orange-500 -top-2 -right-2 w-5 h-5  flex items-center justify-center p-0 "
                        >
                            {totalQuantity}
                        </Badge>
                    )}
                </Button>
            </SheetTrigger>
            <SheetContent className={"w-full sm:w-auto"}>
                <SheetHeader>
                    <SheetTitle>Cart</SheetTitle>
                    <SheetDescription>
                        Manage your cart items and proceed to checkout.
                    </SheetDescription>
                </SheetHeader>
                <div className={"overflow-auto"}>
                    {cart.map((item, index) => (
                        <SingleCartItem product={item} key={`${item.id}-${index}`}/>
                    ))}
                </div>
                <SheetFooter className={"mb-8"}>
                    <Button size={"lg"}>
                        Proceed to Checkout
                    </Button>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}
