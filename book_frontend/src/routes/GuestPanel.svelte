<script>
    import AdminLogin from "./AdminLogin.svelte";

    import GuestView from "./GuestView.svelte";
</script>

<form method="post" class = "w-100 h-96 bg-yellow-500 text-center mt-0">
    <input name="first_name" type="text" placeholder="Imię" class = "guest-panel-input"/>
    <input name="last_name" type="text" placeholder="Nazwisko" class = "guest-panel-input"/><br/><br/>
    <textarea name="description" rows=10 cols=30 wrap="soft" class = "unset-all bg-white box-border p-1 text-left"></textarea><br/>
    <input type="submit" value="Zostań gościem!" class = "unset-all w-60 text-black h-10 bg-white text-center hover:bg-gray-500 hover:text-white transition-all duration-500 cursor-pointer"/>
</form>
