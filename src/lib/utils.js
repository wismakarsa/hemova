const { randomBytes } = await import('node:crypto')

export const serializeNonPOJOs = (obj) => {
    return structuredClone(obj);
}

export const generateUsername = (name) => {
    const id = randomBytes(2).toString('hex')
    return `${name.slice(0, 5)}${id}`
}

export const getImageURL = (collectionId, recordId, fileName, size = '0x0') => {
    return `https://husada.pockethost.io/api/files/${collectionId}/${recordId}/${fileName}?thumb=${size}`;
}

export const hideEmail = (email) => {
    const partialEmail = email.replace(/(\w{3})[\w.-]+@([\w.]+\w)/, "$1***@$2")
    return partialEmail
}

export const generateEmoji = () => {
    let emojis = [
       '👶','👦','👧','👨','👩','👴','👵','👱','👼','👸','😺','😸','😻','😽','😼','🙀','😿','😹','😾','👹','👺','🙈','🙉','🙊','💀','👽','💩','🔥','✨','🌟','💫','💥','💢','💦','💧','💤','💨','👂','👀','👃','🐞','🐌','🐙','🐚','🐠','🐟','🐬','🐳','🐋','🐄','🐏','🐀','🐃','🐅','🐇','🐉','🐎','🐐','🐓','🐕','🐖','🐁','🐂','🐲','🐡','🐊','🐫','🐪','🐆','🐈','🐩','🐾','💐','🌸','🌷','🍀','🌹','🌻','🌺','🍁','🍃','🍂','🌿','🌾','🍄','🌵','🌴','🌲','🌳','🌰','🌱','🌼','🌐','🌞','🌝','🌚','🌑','🌒','🌓','🌔','🌕','🌖','🌗','🌘','🌜','🌛','🌙','🌍','🌎','🌏','🌋','🌌','🌠','⭐','☀','⛅'
    ];

    return emojis[~~(Math.random() * emojis.length)]
}