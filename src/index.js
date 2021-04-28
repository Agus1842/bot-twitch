const tmi = require('tmi.js')

const options = {
    options: {
        debug: true
    },
    identity: {
        username: 'aguss1621',
        password: 'oauth:502srv92u2m2d5ywwtzzv64kusi344'
    },
    channels: ['aguss1621']
}

const client = new tmi.client(options)


client.connect();

client.on('connected', (address, port) => {
    client.action('agus1621', `hello Gamers  connected to ${address}:${port}`)
})

client.on('chat', (target, ctx, message, self) => {
    if (self) return;

    console.log(target);
    console.log(ctx)

    const commandName = message.trim();

    if (commandName === 'Hola') {
        client.say(target, `Hola agus maquina crack ${ctx.username}`)
    }

    if (commandName === 'que estas jugando?') {
        client.say(target, `Estamos Jugando GTAV ${ctx.username}`)
    }
})