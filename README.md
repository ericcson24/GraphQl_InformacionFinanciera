# GraphQl_InformacionFinanciera

GraphQL - Sistema de Información Financiera y Validaciones
Objetivo:

Desarrollar una API en GraphQL que gestione un sistema de consulta de datos financieros y validaciones tecnológicas.

**Colecciones**:
Usuarios: Contiene la información de los usuarios registrados en el sistema.
Consultas Financieras: Registra las consultas realizadas por los usuarios sobre criptomonedas, tasas de interés e inflación.
Validaciones Tecnológicas: Almacena los resultados de validaciones de correo electrónico y generación de contraseñas.

**Resolvers**:
**addUser**

Parámetros:

Nombre completo (ej. "Ana Gómez Pérez")
Número de teléfono con prefijo nacional (ej. "+34645543345")
Correo electrónico (ej. "ana.gomez@example.com")
Dirección (ej. "Avenida Libertad, 25, Barcelona, España")
Devuelve:
El usuario recién creado con su ID.

**consultCryptoPrice**

Parámetros:

Nombre de la criptomoneda (ej. "Bitcoin")
Devuelve:
El precio actualizado de la criptomoneda.

**consultInterestRate**

Devuelve:
La tasa de interés actual del mercado financiero.

**consultInflation**

Devuelve:
El porcentaje de inflación más reciente.

**validateEmail**

Parámetros:

Dirección de correo electrónico a validar (ej. "ana.gomez@example.com")
Devuelve:
Un booleano indicando si el correo es válido o no.

**generateSecurePassword**

Parámetros:

Longitud de la contraseña (mínimo 8 caracteres)
Incluir caracteres especiales (true/false)
Incluir números (true/false)
Devuelve:
Una contraseña generada de manera segura.

**Consultas** (Queries)
**getUser**

Parámetro:

ID del usuario
Devuelve:

Nombre completo
Número de teléfono
Correo electrónico
Dirección
Historial de consultas financieras
Historial de validaciones tecnológicas
**getCryptoPriceHistory**

Devuelve:
Lista de todas las criptomonedas consultadas con su precio actualizado y fecha de consulta.

**getValidatedEmails**

Devuelve:
Lista de correos electrónicos validados con fecha de validación y resultado.

Eliminaciones y Actualizaciones
**deleteUser**

Parámetro:

ID del usuario
Devuelve:
true o false según si el usuario ha sido eliminado correctamente.

**updateUser**

Parámetros:

ID del usuario
Nuevos datos (nombre, teléfono, correo electrónico o dirección)
Devuelve:
Los datos actualizados del usuario.

Notas:
Se debe validar el número de teléfono usando una API externa. Si no es válido, la mutación devolverá un error de GraphQL.
Se debe validar el correo electrónico usando una API externa. Si no es válido, la mutación devolverá un error de GraphQL.
No se permite registrar más de un usuario con el mismo número de teléfono o correo electrónico.
Los datos financieros se deben obtener en tiempo real desde las APIs externas.
Se debe estructurar el proyecto utilizando resolvers, typedefs y utils en Deno con Apollo Server y MongoDB.
Entrega:
Enlace a una release de GitHub con el código fuente.
Archivo comprimido generado en la release.
Enlace al despliegue de la aplicación en Deno Deploy.
Si falta alguno de los dos primeros elementos, la calificación será 0.
