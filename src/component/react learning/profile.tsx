import Image from "next/image"
import couple from "@/component/assets/images/couple.jpg"
export default function Profile(){
const pfile= {
  name1:"deepika padukone",
  name2:"XXX Return Of Xander Cage",
  name3:"baran and dilan",
  imagelink2:"https://m.media-amazon.com/images/M/MV5BMTY4NDYzNzE0N15BMl5BanBnXkFtZTgwNTQzNDk0MDI@._V1_.jpg",
  imagelink1:"https://static.toiimg.com/photo/59632084.cms"}
return <div className="">
{/* <img className="rounded-lg" src={pfile.imagelink1} alt="" width={100} height={100}/>
<div>NAME:{pfile.name1}</div> */}
<Image className="rounded-lg" src={pfile.imagelink2} alt="" width={100} height={100}/>
<div>NAME:{pfile.name2}</div>
<Image className="rounded-lg" src={couple} alt="" width={100} height={100}/>
<div>NAME:{pfile.name3}</div>


</div>}