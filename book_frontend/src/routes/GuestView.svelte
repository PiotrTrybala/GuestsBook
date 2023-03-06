<script>
    import GuestRow from "./GuestRow.svelte";

    export let guests;
    let limited_guests = guests["item"].slice(0, 5);
</script>

<div class="w-100 h-96 flex justify-center items-center">
    <div class="w-90 h-64 overflow-hidden">
        {#each limited_guests as guest}
            <GuestRow
                first={guest.first_name}
                last={guest.last_name}
                description={guest.description.length < 20
                    ? guest.description
                    : guest.description.slice(0, 20) + "..."}
            />
        {/each}
    </div>
</div>
