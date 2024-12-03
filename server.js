import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url);
        if (url.pathname === '/'){
            return new Response(JSON.stringify({"Status": "Updated"}), {
                headers: {'content-type': 'application/json'}
            });
        } else {
            return new Response('Not found', {status: 404});
        }
        
    },
    port: 3000,
})

console.log (`Server is running.`);