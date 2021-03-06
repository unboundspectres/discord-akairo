module.exports = {
    ArgumentMatches: {
        WORD: 'word',
        PREFIX: 'prefix',
        FLAG: 'flag',
        TEXT: 'text',
        CONTENT: 'content',
        REST: 'rest',
        SEPARATE: 'separate',
        NONE: 'none'
    },
    ArgumentTypes: {
        STRING: 'string',
        LOWERCASE: 'lowercase',
        UPPERCASE: 'uppercase',
        CHAR_CODES: 'charCodes',
        NUMBER: 'number',
        INTEGER: 'integer',
        DYNAMIC: 'dynamic',
        DYNAMIC_INT: 'dynamicInt',
        URL: 'url',
        DATE: 'date',
        COLOR: 'color',
        USER: 'user',
        USERS: 'users',
        MEMBER: 'member',
        MEMBERS: 'members',
        RELEVANT: 'relevant',
        RELEVANTS: 'relevants',
        CHANNEL: 'channel',
        CHANNELS: 'channels',
        TEXT_CHANNEL: 'textChannel',
        TEXT_CHANNELS: 'textChannels',
        VOICE_CHANNEL: 'voiceChannel',
        VOICE_CHANNELS: 'voiceChannels',
        ROLE: 'role',
        ROLES: 'roles',
        EMOJI: 'emoji',
        EMOJIS: 'emojis',
        GUILD: 'guild',
        GUILDS: 'guilds',
        MESSAGE: 'message',
        GUILD_MESSAGE: 'guildMessage',
        INVITE: 'invite',
        MEMBER_MENTION: 'memberMention',
        CHANNEL_MENTION: 'channelMention',
        ROLE_MENTION: 'roleMention',
        EMOJI_MENTION: 'emojiMention',
        COMMAND_ALIAS: 'commandAlias',
        COMMAND: 'command',
        INHIBITOR: 'inhibitor',
        LISTENER: 'listener'
    },
    ArgumentSplits: {
        PLAIN: 'plain',
        QUOTED: 'quoted',
        STICKY: 'sticky',
        NONE: 'none'
    },
    AkairoHandlerEvents: {
        LOAD: 'load',
        REMOVE: 'remove',
        ENABLE: 'enable',
        DISABLE: 'disable'
    },
    CommandHandlerEvents: {
        MESSAGE_BLOCKED: 'messageBlocked',
        MESSAGE_INVALID: 'messageInvalid',
        COMMAND_DISABLED: 'commandDisabled',
        COMMAND_BLOCKED: 'commandBlocked',
        COMMAND_STARTED: 'commandStarted',
        COMMAND_FINISHED: 'commandFinished',
        COMMAND_CANCELLED: 'commandCancelled',
        MISSING_PERMISSIONS: 'missingPermissions',
        COOLDOWN: 'cooldown',
        IN_PROMPT: 'inPrompt',
        ERROR: 'error'
    },
    BuiltInReasons: {
        OTHERS: 'others',
        CLIENT: 'client',
        BOT: 'bot',
        OWNER: 'owner',
        GUILD: 'guild',
        DM: 'dm'
    },
    Symbols: {
        COMMAND_CANCELLED: Symbol('commandCancelled')
    }
};
