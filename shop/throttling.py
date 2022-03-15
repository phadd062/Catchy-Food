from rest_framework.throttling import AnonRateThrottle, UserRateThrottle


class AnonMinRateThrottle(AnonRateThrottle):
    scope = "anon_min"


class AnonHourRateThrottle(AnonRateThrottle):
    scope = "anon_hour"


class UserHourRateThrottle(UserRateThrottle):
    scope = "user_hour"
