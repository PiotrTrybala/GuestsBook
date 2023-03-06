
<div>

    <div>

        <div>
            Navigation
            <button>Guest form</button>
            <button>Last n guests</button>
            <button>Admin</button>
        </div>

        <div>
            <div>FirstName LastName Description(0:30)</div>
        </div>

        <div>
            <form method = "post" action="?/login">
                <input type = "text" placeholder = "Username">
                <input type = "password" placeholder = "Password">
                <input type = "submit" value = "Sign in">
            </form>
        </div>

        <form method="post">
            <input name = "first_name" type = "text" placeholder="Imię">
            <input name = "last_name" type = "text" placeholder="Nazwisko">
            <textarea name = "description" rows="10" cols="30">
                Description 
            </textarea>
            <input type = "submit" value = "Zostań gościem!">
        </form>

    </div>

</div>