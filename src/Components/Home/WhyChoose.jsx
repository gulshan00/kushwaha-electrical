import {
FaAward,
FaUsers,
FaClock,
FaCheckCircle
} from "react-icons/fa";

const features=[
["Experienced Team",<FaUsers/>],
["Quality Service",<FaAward/>],
["24/7 Support",<FaClock/>],
["Certified Engineers",<FaCheckCircle/>]
];

const WhyChoose=()=>{

return(

<section className="bg-blue-700 py-20 text-white">

<div className="max-w-7xl mx-auto">

<h2 className="text-center text-4xl font-bold mb-14">
Why Choose Us
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

{features.map((item,index)=>(

<div key={index} className="text-center">

<div className="text-5xl flex justify-center mb-5">
{item[1]}
</div>

<h3 className="text-xl font-semibold">
{item[0]}
</h3>

</div>

))}

</div>

</div>

</section>

)

}

export default WhyChoose;