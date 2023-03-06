export const actions = {

    // @ts-ignore
    guest: async ( {request} ) => {
        
        // @ts-ignore
        const data = await request.formData();

        const first_name = data.get('first_name');
        const last_name = data.get('last_name');
        const description = data.get('description').slice(0, 100);

        console.log(first_name, last_name, description);

        let new_guest = {
            first_name: first_name,
            last_name: last_name,
            description: description
        };

        console.log(JSON.stringify(new_guest));

        await fetch('http://localhost:49000/guests/add', {
            method: "POST",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(new_guest)
        }).then(response => {
            console.log(response.ok);
        });

    },

    // @ts-ignore
    login: async ( {request} ) => {
        console.log(await request.formData());
    }

}