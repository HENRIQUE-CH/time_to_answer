json.result @admins do  |admin|
    json.id admin.id
    json.email admin.email

end


    json.count @admins.count


