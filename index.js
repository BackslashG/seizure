import art from 'ascii-art'
import chalk from 'chalk'
import readline from 'readline-sync'
let i = 9
const sleep = ms => new Promise(r => setTimeout(r, ms)); //sleep
console.clear()
console.log(chalk.bgCyan.white("created with <3 by slash"))
art.font("SEIZURE", 'doom', (err, rendered) => {
    console.log(chalk.cyan.bold(rendered))
    if (err === undefined) {
    } else {
        console.error(chalk.bgRed(err))
    }
});
await sleep(50);
console.log(chalk.bgRedBright.white("I am not responsible for any damages. This does violate the Discord Terms of Service."))
let token = readline.question(chalk.blueBright("Token: "));
if (token === "") {
    console.log(chalk.red("you need to set a token."))
    process.exit()
} else {
    console.log(chalk.gray("Set token as: " + token))
}
langChina(token);
while (i < 10) {
    await sleep (750)
    darkMode(token);
//    await sleep (1000)
//    langChina(token);
//    await sleep (1000)
//    langTaiwan(token);
    await sleep (750)
    lightMode(token);
//    await sleep (1000)
//    langKorean(token);
//    await sleep (1000)
//    langThai(token);
  }

// functions
function lightMode(auth) {
    fetch("https://discord.com/api/v9/users/@me/settings-proto/1", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.5",
            "authorization": auth,
            "content-type": "application/json",
            "priority": "u=1, i",
        },
        "body": "{\"settings\":\"agYIAhABGgA=\"}",
        "method": "PATCH"
    }); // LIGHT MODE
    console.log(chalk.bgBlueBright("SEIZURE") + chalk.blueBright(" Set to light mode"))
}

function darkMode(auth) {
    fetch("https://discord.com/api/v9/users/@me/settings-proto/1", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.5",
            "authorization": auth,
            "content-type": "application/json",
            "priority": "u=1, i",
        },
        "body": "{\"settings\":\"agYIARABGgA=\"}",
        "method": "PATCH"
    }); // DARK MODE
    console.log(chalk.bgBlueBright("SEIZURE") + chalk.blueBright(" Set to dark mode"))
}
function langChina(auth) {
    fetch("https://discord.com/api/v9/users/@me/settings-proto/1", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.5",
            "authorization": auth,
            "content-type": "application/json",
            "priority": "u=1, i",
        },
        "body": "{\"settings\":\"Yg4KBwoFemgtQ04SAwisAg==\"}",
        "method": "PATCH"
    }); // CHINESE
    console.log(chalk.bgBlueBright("SEIZURE") + chalk.blueBright(" Set to Chinese"))
}

function langTaiwan(auth) {
    fetch("https://discord.com/api/v9/users/@me/settings-proto/1", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.5",
            "authorization": auth,
            "content-type": "application/json",
            "priority": "u=1, i",
        },
        "body": "{\"settings\":\"Yg4KBwoFemgtVFcSAwisAg==\"}",
        "method": "PATCH"
    }); // TAIWAN
    console.log(chalk.bgBlueBright("SEIZURE") + chalk.blueBright(" Set to Taiwan"))
}
function langKorean(auth) {
    fetch("https://discord.com/api/v9/users/@me/settings-proto/1", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.5",
            "authorization": auth,
            "content-type": "application/json",
            "priority": "u=1, i",
        },
        "body": "{\"settings\":\"Yg4KBwoFemgtVFcSAwisAg==\"}",
        "method": "PATCH"
    }); // KOREAN
    console.log(chalk.bgBlueBright("SEIZURE") + chalk.blueBright(" Set to Korean"))
}
function langThai(auth) {
    fetch("https://discord.com/api/v9/users/@me/settings-proto/1", {
        "headers": {
            "accept": "*/*",
            "accept-language": "en-US,en;q=0.5",
            "authorization": auth,
            "content-type": "application/json",
            "priority": "u=1, i",
        },
        "body": "{\"settings\":\"YgsKBAoCdGgSAwisAg==\"}",
        "method": "PATCH"
    }); // THAI
    console.log(chalk.bgBlueBright("SEIZURE") + chalk.blueBright(" Set to Thai"))
}
