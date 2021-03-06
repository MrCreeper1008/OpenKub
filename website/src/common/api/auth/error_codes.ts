enum AuthErrorCodes {
	UNAUTHORIZED_REQUEST = 'AUTH.UNAUTHORIZED_REQUEST',
	MISSING_USERNAME_OR_PASSWORD = 'AUTH.MISSING_USERNAME_OR_PASSWORD',
	MISSING_REFRESH_TOKEN = 'AUTH.MISSING_REFRESH_TOKEN',
	INVALID_REFRESH_TOKEN = 'AUTH.INVALID_REFRESH_TOKEN',
	INCORRECT_PASSWORD = 'AUTH.INCORRECT_PASSWORD',
	PLAYER_NOT_REGISTERED = 'AUTH.PLAYER_NOT_REGISTERED',
	USERNAME_TAKEN = 'AUTH.USERNAME_TAKEN',
	PLAYER_ALREADY_ONLINE = 'AUTH.PLAYER_ALREADY_ONLINE',
}

export default AuthErrorCodes;
