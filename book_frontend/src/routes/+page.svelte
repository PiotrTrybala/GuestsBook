<script>
    import GuestPanel from "./GuestPanel.svelte";
    import AdminLogin from "./AdminLogin.svelte";
    import GuestView from "./GuestView.svelte";

    import { onMount } from "svelte";
    let menu = 0;
    /** @type {import('./$types').PageData} */
    export let data;

    import session_store from "./session_store";

    onMount(async () => {
        const res = await fetch("http://localhost:49000/sessionToken");
        let token = await res.json();
        token = token["token"];
        if (window.localStorage.getItem("session_key") == null) {
            window.localStorage.setItem("session_key", token);
        }
        console.log(window.localStorage.getItem("session_key"));
        session_store.set(window.localStorage.get("session_key"));
    });
</script>

<div class="h-screen w-screen flex justify-center items-center flex-col">
    <h1 class = "font-3xl">Księga Gości Zespołu Szkół im. Walerego Goetla</h1>
    <div class="w-100 h-118 bg-blue-500 rounded-3xl">
        <div class="w-100 h-12 flex justify-center items-center top-0">
            <div>
                <button
                    class="text-white mr-10 hover:underline"
                    on:click={() => {
                        menu = 0;
                    }}>Home</button
                >
                <button
                    class="text-white ml-10 hover:underline"
                    on:click={() => {
                        menu = 1;
                    }}>5 ostatnich gości</button
                >
                <!-- <button
                    class="text-white ml-10 hover:underline"
                    on:click={() => {
                        menu = 2;
                    }}>Admin</button -->
                <!-- > -->
            </div>
        </div>
        <div class="w-100 h-96 ">
            <!-- GuestView -->
            {#if menu === 0}
                <GuestPanel />
            {:else if menu === 1}
                <!-- AdminLogin -->
                <GuestView guests={data} />
            {:else if menu === 2}
                <!-- GuestPanel -->
                <AdminLogin />
            {:else}
                <div>Could not load menu with id {menu}</div>
            {/if}
        </div>
    </div>

    <footer class = "fixed bottom-0 left-0 p-1 box-border">
        
        Wersja demostracyjna programu. Piotr Trybała 3TP
        

    </footer>

</div>
