export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        
        const name = formData.get('name');
        const email = formData.get('email');
        const address = formData.get('address');
        const age = formData.get('age');
  
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Address:", address);
        console.log("Age:", age);
    }
  };
  



