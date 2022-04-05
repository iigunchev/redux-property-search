import Listing from '../Listing/Listing'

const PopularListings = () => {
    return (
        <div className="text-left">
            <h4 className="font-bold text-xl text-slate-800">Popular Listings</h4>
            <section className="grid md:grid-cols-2 gap-4 py-4">
                <div>
                    <h5 className="font-bold text-lg text-slate-700">Buy</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Listing />
                        <Listing />
                    </div>
                </div>
                <div>
                    <h5 className="font-bold text-lg text-slate-700">Rent</h5>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Listing />
                        <Listing />
                    </div>
                </div>
            </section>    
        </div>
    );
}

export default PopularListings