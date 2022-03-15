def is_valid_queryparam(param):
    return param != "" and param is not None


def password_is_strong(password):
    if (
        len(password) <= 12
        or password.lower() == password
        or password.upper() == password
        or password.isalnum()
        or not any(i.isdigit() for i in password)
    ):
        return False
    return True
