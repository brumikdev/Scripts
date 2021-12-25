--[[ Cretor discord - Neonový Brumík#0110 ]]


-- This function is used to register a command for the chat. 
--When this is exectuted, it will execute a function, doing the msg function to the client
RegisterCommand('info', function()
    msg("Discord: discord.gg/invite")
    msg("Website: website.com")
    msg("teamspeak: ts3.com")
    msg("Script Creator: Neonový Brumík#0110")
end, false)

-- We declare this 'msg' function on the bottom due to better practices.
function msg(text)
    -- TriggerEvent will send a chat message to the client in the prefix as red
    TriggerEvent("chatMessage",  "[SethereyourNameofserver]", {255,0,0}, text)
end