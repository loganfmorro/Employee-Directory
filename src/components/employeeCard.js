import React from "react";

function EmployeeCard({ name, image, dept, email, phone}) { 
   return (
       <div className="md">
           <img
               style={{ maxWidth: "60px"}}
               className="employeeCard"
               src={image}
               alt="employee"
           />
           <p className="font-bold text-md">{name}</p>
           <p>{dept}</p>
           <p className="text-white-500">{email}</p>
           <p>{phone}</p>
       </div>
   )
}

export default EmployeeCard;