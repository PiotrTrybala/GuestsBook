/** @type {import('./$types').PageLoad} */
export async function load({fetch, params}) {

    const res = await fetch('http://localhost:49000/guests/all', {
        mode: 'cors',
        headers: {
            'Content-Type': 'application/type'
        }
    });

    let item = await res.json();

    return {
        item
    }

}