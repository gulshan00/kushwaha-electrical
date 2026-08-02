import {
FaBolt,
FaLightbulb,
FaIndustry,
FaPlug,
FaTools,
FaShieldAlt,
} from "react-icons/fa";

const services = [
{
title:"Electrical Installation",
icon:<FaBolt/>
},
{
title:"Industrial Wiring",
icon:<FaIndustry/>
},
{
title:"Lighting Solutions",
icon:<FaLightbulb/>
},
{
title:"Transformer Services",
icon:<FaPlug/>
},
{
title:"Maintenance",
icon:<FaTools/>
},
{
title:"Safety Inspection",
icon:<FaShieldAlt/>
},
];

const Services=()=>{

return(

<section className="py-24 bg-gray-100">

<div className="max-w-7xl mx-auto px-6">

<h2 className="text-center text-4xl font-bold mb-14">
Our Services
</h2>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

{services.map((item,index)=>(

<div
key={index}
className="bg-white rounded-xl p-8 shadow hover:shadow-xl transition"
>

<div className="text-5xl text-blue-700 mb-5">
{item.icon}
</div>

<h3 className="text-2xl font-semibold">
{item.title}
</h3>

<p className="mt-4 text-gray-600">
High-quality electrical service with certified engineers and latest equipment.
</p>

</div>

))}

</div>

</div>

</section>

)

}

export default Services;