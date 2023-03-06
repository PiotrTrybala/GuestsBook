<script>
    import GuestPanel from "./GuestPanel.svelte";
    import AdminLogin from "./AdminLogin.svelte";
    import GuestView from "./GuestView.svelte";
    let menu = 0;
</script>

<div class="h-screen w-screen flex justify-center items-center">
    <div class="w-100 h-100 bg-blue-500">
        <div class="w-100 flex justify-center items-center top-0 bg-red-500">
            <div>
                <button
                    on:click={() => {
                        menu = 0;
                    }}>Guest form</button
                >
                <button
                    on:click={() => {
                        menu = 1;
                    }}>Last n guests</button
                >
                <button
                    on:click={() => {
                        menu = 2;
                    }}>Admin</button
                >
            </div>
        </div>
        <div class = "w-100 h-96 bg-green-500">
            <!-- GuestView -->
            {#if menu === 0}
                <GuestPanel />
            {:else if menu === 1}
                <!-- AdminLogin -->
                <GuestView />
            {:else if menu === 2}
                <!-- GuestPanel -->
                <AdminLogin />
            {:else}
                <div>Could not load menu with id {menu}</div>
            {/if}
        </div>
    </div>
</div>
