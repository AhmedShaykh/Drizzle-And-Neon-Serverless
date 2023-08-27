import { cookies } from "next/headers";
import * as jose from "jose";

const secret = jose.base64url.decode(process.env.SESSION_KEY);

const issuer = "urn:ahmx:issuer";

const audience = "urn:ahmx:audience";

const expiresAt = "2h";

export const encodeUserSession = async (userId) => {

    const jwt = await new jose.EncryptJWT({ "user": userId })
        .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
        .setIssuedAt()
        .setIssuer(issuer)
        .setAudience(audience)
        .setExpirationTime(expiresAt)
        .encrypt(secret);

    return jwt;
};

export const decodeUserSession = async (jwt) => {

    try {

        const { payload } = await jose.jwtDecrypt(jwt, secret, {
            issuer: issuer,
            audience: audience,
        });

        const { user } = payload;

        return user;

    } catch (error) {

        console.log(error);

    }

    return null;
};

// async function verifySession() {

//     const userId = "16788";

//     const jwtToken = await encodeUserSession(userId);

//     const payload = await decodeUserSession(jwtToken);

//     const { user } = payload;

//     console.log(user, payload, userId === user);
// };

// verifySession().then(x => console.log(x, " Verify")).catch(err => console.log(err));

export const setSessionUser = async (userId) => {

    const newSessionValue = await encodeUserSession(userId);

    cookies().set("session_id", newSessionValue);
};

export const getSessionUser = async () => {

    const cookieSessionValue = cookies().get("session_id");

    if (!cookieSessionValue) {
        return null;
    }

    const extractedUserId = await decodeUserSession(cookieSessionValue.value);

    if (!extractedUserId) {
        return null;
    }

    return extractedUserId;
};