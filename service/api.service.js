import { BASE_URL } from "@/utils/constants"



export const registerUser = async(data) => {
    let bodyContent = JSON.stringify(data);
      let response = await fetch(`${BASE_URL}/api/user/register`, { 
        method: "POST",
        body: bodyContent,
        headers: { 
            'Content-Type': 'application/json'
          },
      });
      return await response.json();
}

export const validateUser = async(address) => {
       let response = await fetch(`${BASE_URL}/api/user/checkin/${address}`, { 
         method: "GET",
         headers: { 
            'Content-Type': 'application/json'
          },
       });
       
       return await response.json();
}