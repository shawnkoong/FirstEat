// package com.firsteat.firsteat.util;

// import java.security.Key;

// import org.springframework.beans.factory.annotation.Value;
// import org.springframework.stereotype.Component;

// import org.springframework.security.core.userdetails.UserDetails;

// import io.jsonwebtoken.Claims;
// import io.jsonwebtoken.Jwts;
// import io.jsonwebtoken.SignatureAlgorithm;
// import io.jsonwebtoken.io.Decoders;
// import io.jsonwebtoken.security.Keys;

// import java.util.function.Function;
// import java.util.Date;
// import java.util.HashMap;
// import java.util.Map;

// @Component
// public class JwtUtil {

//     // token valid for 24 hours
//     public static final long JWT_TOKEN_VALIDITY = 24 * 60 * 60;

//     @Value("${jwt.secret}")
//     private String SECRET_KEY;

//     public String extractUsername(String token) {
//         return extractClaim(token, Claims::getSubject);
//     }

//     public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
//         final Claims claims = extractAllClaims(token);
//         return claimsResolver.apply(claims);
//     }

//     public String generateToken(UserDetails userDetails) {
//         Map<String, Object> claims = new HashMap<>();
//         return generateToken(claims, userDetails);
//     }

//     public String generateToken(Map<String, Object> claims, UserDetails userDetails) {
//         return Jwts
//                 .builder()
//                 .setClaims(claims)
//                 .setSubject(userDetails.getUsername())
//                 .setIssuedAt(new Date(System.currentTimeMillis()))
//                 .setExpiration(new Date(System.currentTimeMillis() + 1000 * JWT_TOKEN_VALIDITY))
//                 .signWith(getKey(), SignatureAlgorithm.HS512)
//                 .compact();
//     }

//     public boolean validateToken(String token, UserDetails userDetails) {
//         final String username = extractUsername(token);
//         return (username.equals(userDetails.getUsername())) && (!isTokenExpired(token));
//     }

//     public boolean isTokenExpired(String token) {
//         return extractExpiration(token).before(new Date());
//     }

//     private Date extractExpiration(String token) {
//         return extractClaim(token, Claims::getExpiration);
//     }

//     private Claims extractAllClaims(String token) {
//         return Jwts
//                 .parserBuilder()
//                 .setSigningKey(getKey())
//                 .build()
//                 .parseClaimsJws(token)
//                 .getBody();
//     }

//     private Key getKey() {
//         byte[] key = Decoders.BASE64.decode(SECRET_KEY);
//         return Keys.hmacShaKeyFor(key);
//     }

// }