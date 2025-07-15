import OrderRideBars from "../../../../../components/orderRideBars";

export default function RidePage() {
    return (
        <div className="lg:border-2 border-gray-100 rounded-xl lg:p-4">
            <h1 className="hidden md:block text-2xl text-black font-semibold">
                Get a ride
            </h1>
            <OrderRideBars type="ride" />
        </div>
    );
}
