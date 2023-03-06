<script>



</script>

<form method="post" action = "?/guest" class = "w-100 h-96 text-center mt-0">
    <input required name="first_name" type="text" placeholder="Imię" class = "guest-panel-input focus:placeholder:text-white"/>
    <input required name="last_name" type="text" placeholder="Nazwisko" class = "guest-panel-input focus:placeholder:text-white"/><br/><br/>
    <textarea name="description" rows=10 cols=30 wrap="soft" class = "unset-all rounded-xl bg-white box-border p-1 text-left"></textarea><br/>
    <input type="submit" value="Zostań gościem!" class = "unset-all w-60 rounded-3xl text-black h-10 bg-white text-center hover:bg-gray-500 hover:text-white transition-all duration-500 cursor-pointer"/>
</form>
