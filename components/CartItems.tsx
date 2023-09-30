import { CartAction } from "./CartAction"
import { CartList } from "./CartList"

export const CartItems = () => {
    return(
        <section className="mx-6 ">
            <div className="flex justify-between font-semibold">
                <p>YOUR CART</p>
                <p>CONTINUE SHOPPING</p>
            </div>
            <div className="my-10">
                <CartList/>
                <CartList/>
                <CartList/>
            </div>
            <div>
                <CartAction/>
            </div>
        </section>
    )
}