menu_list_items = ["Veg Supreme Burger", "Paneer Tikka", "Extra Cheese Pizza", "Cheese Burst Pizza","Pepperoni Pizza"];

function run()
{
    document.getElementById("menu_list_items").innerHTML = menu_list_items;
}

function add_new_menu_item()
{
    new_menu_item = document.getElementById("new_menu_item").value;
    menu_list_items.push(new_menu_item);
    menu_list_items.sort();
    document.getElementById("menu_list_items").innerHTML = menu_list_items;
}

