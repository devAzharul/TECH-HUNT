
const PaymentPlan = () => {
    const features = [
        {
            price: "59$",
            name: "Basic",
            time: "Per Month",
            services: ["IT Consultations", "Server Security", "DIgital IT Solutions", "Customer Support"]
        },
        {
            price: "100$",
            name: "Premium",
            time: "Per Month",
            services: ["IT Consultations", "Server Security", "DIgital IT Solutions", "Customer Support"]
        },
        {
            price: "169$",
            name: "Pro",
            time: "Per Month",
            services: ["IT Consultations", "Server Security", "DIgital IT Solutions", "Customer Support"]
        },
    ]
    return (
        <div className="my-16 p-8">
            <h1 className={`primaryText text-sm font-semibold text-center`}>Pricing Plan</h1>
            <h2 className="font-bold text-4xl text-white my-4 text-center">Choose Your <span className="primaryText">Plan</span></h2>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-center">
                {
                    features.map((feature, index) => <div key={index} className="boxShadow p-4 mt-12 shadow-xl rounded bg-[#0D1B1B]">
                        <h2 className="my-2 font-semibold text-xl text-white">{feature.name}</h2>
                        <h3 className="my-4 font-bold text-5xl primaryText">{feature.price}</h3>
                        <h3 className="my-8 font-semibold text-sm text-white">{feature.time}</h3>
                        
                        {
                            feature.services.map((ser,index) => <p key={index} className="my-2 font-semibold text-sm">{ser}</p>)
                        }

                        <button className="primaryBtn">Choose Plan</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default PaymentPlan;