# GLI ALGORITMI (Spiegati da Mommy)

### 1. [ECC](ECC_DEEP_ASS_DIVE.md) (Elliptic Curve Cryptography) - A chi non piacciono quelle curvose?
Immagina una curva perfetta. Matematica pura.
Tu scegli un punto segreto. Nessuno può sapere dov'è.
Ma puoi dare a tutti un punto pubblico.

- **Chiave Privata**: É un po' come la tua mommy, se qualcun altro c'è l'ha sei fottuto.
- **Chiave Pubblica**: Questo è il tuo home boy, dallo a chiunque.

Usiamo **P-256**. Standard, solida, e veloce come me quando devo tornare a casa per guardare i mommy ASMR. Molto meglio di quelle vecchie chiavi RSA enormi che usavi prima(lo so che compensavano ma se ci pensi forse ora c'è lo hai più lungo della chaive ;) ). Le dimensioni contano, ma l'efficienza conta di più(quindi non ti buttare giù hai ancora una chance).

### 2. [AES-GCM](AES_DEEP_ASS_DIVE.md) - Il tuo forte e succulente homeboy
Una volta che hai scambiato i segreti con le curve (ECDH), usiamo AES.
AES è un po' come il tuo home boy, ti protegge dalle gorlock the destroyer(quelli stronzi che chiamiamo hacker).
- **Key (32 byte)**: Quanto succulenti e grosse sono le sue cosce... ugh, ugh... volevo dire muscoli, sì muscoli.
- **GCM (Galois/Counter Mode)**: È un po' come se lo marcassi in... modi creativi. Se qualcun altro prova a toccarlo? **DENIED.** 🚫
Mommy sa sempre se hai toccato quello che non dovevi.

### 3. [RSA-OAEP](RSA_DEEP_DIVE_MOMMY.md) - Se ti piacciono quelle più vecchie
A volte hai bisogno dei classici basta le mommy, e i femboy. RSA è grande, grosso e cattivo( come piace a te :) ).
- **OAEP**: Prendi una gabbia di castità e mettigliela, la gente verrà bloccata se prova a toccarla.

# Esempi carini:
### AES-GCM
```python
import os
import secrets

s_box = (
    0x63, 0x7C, 0x77, 0x7B, 0xF2, 0x6B, 0x6F, 0xC5, 0x30, 0x01, 0x67, 0x2B, 0xFE, 0xD7, 0xAB, 0x76,
    0xCA, 0x82, 0xC9, 0x7D, 0xFA, 0x59, 0x47, 0xF0, 0xAD, 0xD4, 0xA2, 0xAF, 0x9C, 0xA4, 0x72, 0xC0,
    0xB7, 0xFD, 0x93, 0x26, 0x36, 0x3F, 0xF7, 0xCC, 0x34, 0xA5, 0xE5, 0xF1, 0x71, 0xD8, 0x31, 0x15,
    0x04, 0xC7, 0x23, 0xC3, 0x18, 0x96, 0x05, 0x9A, 0x07, 0x12, 0x80, 0xE2, 0xEB, 0x27, 0xB2, 0x75,
    0x09, 0x83, 0x2C, 0x1A, 0x1B, 0x6E, 0x5A, 0xA0, 0x52, 0x3B, 0xD6, 0xB3, 0x29, 0xE3, 0x2F, 0x84,
    0x53, 0xD1, 0x00, 0xED, 0x20, 0xFC, 0xB1, 0x5B, 0x6A, 0xCB, 0xBE, 0x39, 0x4A, 0x4C, 0x58, 0xCF,
    0xD0, 0xEF, 0xAA, 0xFB, 0x43, 0x4D, 0x33, 0x85, 0x45, 0xF9, 0x02, 0x7F, 0x50, 0x3C, 0x9F, 0xA8,
    0x51, 0xA3, 0x40, 0x8F, 0x92, 0x9D, 0x38, 0xF5, 0xBC, 0xB6, 0xDA, 0x21, 0x10, 0xFF, 0xF3, 0xD2,
    0xCD, 0x0C, 0x13, 0xEC, 0x5F, 0x97, 0x44, 0x17, 0xC4, 0xA7, 0x7E, 0x3D, 0x64, 0x5D, 0x19, 0x73,
    0x60, 0x81, 0x4F, 0xDC, 0x22, 0x2A, 0x90, 0x88, 0x46, 0xEE, 0xB8, 0x14, 0xDE, 0x5E, 0x0B, 0xDB,
    0xE0, 0x32, 0x3A, 0x0A, 0x49, 0x06, 0x24, 0x5C, 0xC2, 0xD3, 0xAC, 0x62, 0x91, 0x95, 0xE4, 0x79,
    0xE7, 0xC8, 0x37, 0x6D, 0x8D, 0xD5, 0x4E, 0xA9, 0x6C, 0x56, 0xF4, 0xEA, 0x65, 0x7A, 0xAE, 0x08,
    0xBA, 0x78, 0x25, 0x2E, 0x1C, 0xA6, 0xB4, 0xC6, 0xE8, 0xDD, 0x74, 0x1F, 0x4B, 0xBD, 0x8B, 0x8A,
    0x70, 0x3E, 0xB5, 0x66, 0x48, 0x03, 0xF6, 0x0E, 0x61, 0x35, 0x57, 0xB9, 0x86, 0xC1, 0x1D, 0x9E,
    0xE1, 0xF8, 0x98, 0x11, 0x69, 0xD9, 0x8E, 0x94, 0x9B, 0x1E, 0x87, 0xE9, 0xCE, 0x55, 0x28, 0xDF,
    0x8C, 0xA1, 0x89, 0x0D, 0xBF, 0xE6, 0x42, 0x68, 0x41, 0x99, 0x2D, 0x0F, 0xB0, 0x54, 0xBB, 0x16,
)

r_con = (
    0x00, 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40,
    0x80, 0x1B, 0x36, 0x6C, 0xD8, 0xAB, 0x4D, 0x9A,
    0x2F, 0x5E, 0xBC, 0x63, 0xC6, 0x97, 0x35, 0x6A,
    0xD4, 0xB3, 0x7D, 0xFA, 0xEF, 0xC5, 0x91, 0x39,
)

def xtime(a):
    return (((a << 1) ^ 0x1B) & 0xFF) if (a & 0x80) else (a << 1)

def mix_single_column(a):
    t = a[0] ^ a[1] ^ a[2] ^ a[3]
    u = a[0]
    a[0] ^= t ^ xtime(a[0] ^ a[1])
    a[1] ^= t ^ xtime(a[1] ^ a[2])
    a[2] ^= t ^ xtime(a[2] ^ a[3])
    a[3] ^= t ^ xtime(a[3] ^ u)

class AES:
    def __init__(self, key=None):
        if key is None:
            self.key = secrets.token_bytes(32)
        else:
            if not isinstance(key, bytes) or len(key) != 32:
                raise ValueError
            self.key = key
        
        self.n_rounds = {16: 10, 24: 12, 32: 14}[len(self.key)]
        self._key_matrices = self._expand_key(self.key)

    def _expand_key(self, master_key):
        key_columns = [list(master_key[i:i+4]) for i in range(0, len(master_key), 4)]
        i = 1
        while len(key_columns) < (self.n_rounds + 1) * 4:
            word = list(key_columns[-1])
            if len(key_columns) % (len(master_key) // 4) == 0:
                word.append(word.pop(0))
                word = [s_box[b] for b in word]
                word[0] ^= r_con[i]
                i += 1
            elif len(master_key) == 32 and len(key_columns) % (len(master_key) // 4) == 4:
                word = [s_box[b] for b in word]
            word = [i ^ j for i, j in zip(word, key_columns[-len(master_key) // 4])]
            key_columns.append(word)
        return [key_columns[4*i : 4*(i+1)] for i in range(self.n_rounds + 1)]

    def _encrypt_block(self, plaintext):
        state = [list(plaintext[i:i+4]) for i in range(0, 16, 4)]
        self._add_round_key(state, self._key_matrices[0])
        for i in range(1, self.n_rounds):
            self._sub_bytes(state)
            self._shift_rows(state)
            self._mix_columns(state)
            self._add_round_key(state, self._key_matrices[i])
        self._sub_bytes(state)
        self._shift_rows(state)
        self._add_round_key(state, self._key_matrices[-1])
        return bytes(sum(state, []))

    def _sub_bytes(self, state):
        for i in range(4):
            for j in range(4):
                state[i][j] = s_box[state[i][j]]

    def _shift_rows(self, state):
        state[0][1], state[1][1], state[2][1], state[3][1] = state[1][1], state[2][1], state[3][1], state[0][1]
        state[0][2], state[1][2], state[2][2], state[3][2] = state[2][2], state[3][2], state[0][2], state[1][2]
        state[0][3], state[1][3], state[2][3], state[3][3] = state[3][3], state[0][3], state[1][3], state[2][3]

    def _mix_columns(self, s):
        for i in range(4):
            mix_single_column(s[i])

    def _add_round_key(self, state, key_matrix):
        for i in range(4):
            for j in range(4):
                state[i][j] ^= key_matrix[i][j]

    def gmul(self, x, y):
        r = 0
        for i in range(128):
            if (y >> (127 - i)) & 1:
                r ^= x
            if x & 1:
                x = (x >> 1) ^ 0xE1000000000000000000000000000000
            else:
                x >>= 1
        return r

    def ghash(self, h, data):
        y = 0
        for i in range(0, len(data), 16):
            block = int.from_bytes(data[i:i+16].ljust(16, b'\x00'), 'big')
            y ^= block
            y = self.gmul(y, h)
        return y

    def _inc_32(self, counter_block):
        counter_int = int.from_bytes(counter_block[12:], 'big')
        counter_int = (counter_int + 1) & 0xFFFFFFFF
        return counter_block[:12] + counter_int.to_bytes(4, 'big')

    def encrypt(self, plaintext, associated_data=b''):
        if not isinstance(plaintext, bytes) or not isinstance(associated_data, bytes):
            raise TypeError
        
        iv = os.urandom(12)
        h = int.from_bytes(self._encrypt_block(b'\x00' * 16), 'big')
        j0 = iv + b'\x00\x00\x00\x01'
        
        c = bytearray()
        counter_block = self._inc_32(j0)

        for i in range(0, len(plaintext), 16):
            enc_cb = self._encrypt_block(counter_block)
            chunk = plaintext[i:i+16]
            c.extend(bytes(a ^ b for a, b in zip(chunk, enc_cb)))
            counter_block = self._inc_32(counter_block)
            
        len_a = len(associated_data) * 8
        len_c = len(c) * 8
        auth_data = associated_data + b'\x00' * ((16 - len(associated_data) % 16) % 16)
        auth_data += c + b'\x00' * ((16 - len(c) % 16) % 16)
        auth_data += len_a.to_bytes(8, 'big') + len_c.to_bytes(8, 'big')
        
        s = self.ghash(h, auth_data)
        t = s ^ int.from_bytes(self._encrypt_block(j0), 'big')
        
        return iv + c + t.to_bytes(16, 'big')

    def decrypt(self, ciphertext, associated_data=b''):
        if len(ciphertext) < 28:
            raise ValueError
        
        iv = ciphertext[:12]
        c = ciphertext[12:-16]
        tag = ciphertext[-16:]
        
        h = int.from_bytes(self._encrypt_block(b'\x00' * 16), 'big')
        j0 = iv + b'\x00\x00\x00\x01'
        
        len_a = len(associated_data) * 8
        len_c = len(c) * 8
        auth_data = associated_data + b'\x00' * ((16 - len(associated_data) % 16) % 16)
        auth_data += c + b'\x00' * ((16 - len(c) % 16) % 16)
        auth_data += len_a.to_bytes(8, 'big') + len_c.to_bytes(8, 'big')
        
        s = self.ghash(h, auth_data)
        t = s ^ int.from_bytes(self._encrypt_block(j0), 'big')
        
        if t.to_bytes(16, 'big') != tag:
            raise ValueError
            
        p = bytearray()
        counter_block = self._inc_32(j0)
        
        for i in range(0, len(c), 16):
            enc_cb = self._encrypt_block(counter_block)
            chunk = c[i:i+16]
            p.extend(bytes(a ^ b for a, b in zip(chunk, enc_cb)))
            counter_block = self._inc_32(counter_block)
            
        return bytes(p)
```

## RSA
```python

from functions import generate_large_prime
import base64
from OAEP import OAEP
import math

class RSA:
    def __init__(self, bits=4096):
        if bits < 2048:
            raise ValueError
        self.e = 65537
        while True:
            self.p = generate_large_prime(bits)
            self.q = generate_large_prime(bits)
            if self.p == self.q:
                continue
            self.n = self.p * self.q
            self.phi = (self.p - 1) * (self.q - 1)
            if math.gcd(self.e, self.phi) == 1:
                break
        
        self.d = pow(self.e, -1, self.phi)
        self.dp = self.d % (self.p - 1)
        self.dq = self.d % (self.q - 1)
        self.qinv = pow(self.q, -1, self.p)
        
        self.oaep = OAEP(self.n)
        self.k = self.oaep.k

    def encrypt(self, text) -> str:
        if isinstance(text, str):
            m = text.encode("utf-8")
        elif isinstance(text, bytes):
            m = text
        else:
            raise TypeError
            
        em = self.oaep.encode(m)
        m_int = int.from_bytes(em, "big")
        if m_int >= self.n:
            raise ValueError
        c_int = pow(m_int, self.e, self.n)
        return base64.b64encode(c_int.to_bytes(self.k, "big")).decode("utf-8")

    def decrypt(self, c_b64: str) -> str:
        if not isinstance(c_b64, str):
            raise TypeError
        c_bytes = base64.b64decode(c_b64)
        if len(c_bytes) != self.k:
            raise ValueError
        c_int = int.from_bytes(c_bytes, "big")
        
        m1 = pow(c_int, self.dp, self.p)
        m2 = pow(c_int, self.dq, self.q)
        h = (self.qinv * (m1 - m2)) % self.p
        m_int = m2 + h * self.q
        
        em = m_int.to_bytes(self.k, "big")
        return self.oaep.decode(em).decode("utf-8")
```

### OAEP
```python

import secrets
from hashlib import sha256

class OAEP:
    def __init__(self, n: int):
        self.k = (n.bit_length() + 7) // 8
        self.hash_fn = sha256
        self.hLen = self.hash_fn().digest_size
        self.label = b""
        self.lHash = self.hash_fn(self.label).digest()

    def MGF1(self, seed: bytes, mask_len: int) -> bytes:
        t = b""
        counter = 0
        while len(t) < mask_len:
            c = counter.to_bytes(4, "big")
            t += self.hash_fn(seed + c).digest()
            counter += 1
        return t[:mask_len]

    def encode(self, m: bytes) -> bytes:
        mLen = len(m)
        if mLen > self.k - 2 * self.hLen - 2:
            raise ValueError
        
        ps = b"\x00" * (self.k - mLen - 2 * self.hLen - 2)
        db = self.lHash + ps + b"\x01" + m
        seed = secrets.token_bytes(self.hLen)
        
        db_mask = self.MGF1(seed, self.k - self.hLen - 1)
        masked_db = bytes(x ^ y for x, y in zip(db, db_mask))
        
        seed_mask = self.MGF1(masked_db, self.hLen)
        masked_seed = bytes(x ^ y for x, y in zip(seed, seed_mask))
        
        return b"\x00" + masked_seed + masked_db

    def decode(self, em: bytes) -> bytes:
        if len(em) != self.k:
            raise ValueError
        
        y = em[0]
        masked_seed = em[1 : 1 + self.hLen]
        masked_db = em[1 + self.hLen :]
        
        seed_mask = self.MGF1(masked_db, self.hLen)
        seed = bytes(x ^ y for x, y in zip(masked_seed, seed_mask))
        
        db_mask = self.MGF1(seed, self.k - self.hLen - 1)
        db = bytes(x ^ y for x, y in zip(masked_db, db_mask))
        
        lHash_check = db[:self.hLen]
        
        valid = 1
        if lHash_check != self.lHash:
            valid = 0
        if y != 0:
            valid = 0
            
        index = -1
        for i in range(self.hLen, len(db)):
            if db[i] == 0x01:
                if index == -1:
                    index = i
            elif db[i] != 0x00:
                if index == -1:
                    valid = 0
                    
        if index == -1 or valid == 0:
            raise ValueError
            
        return db[index + 1:]
```
(sì lo so RSA e OAEP sono separati, ma sinceramente avevo 0 sbatti di unirli ma in compenso poi quando ho fatto AES-GCM ho messo tutto insieme)

ma sinceramente tutto questo è una merda, è fatto in python, che da un paio di problemi, ovvero:
> [!FAILURE] **Side-Channel Attacks**
> Python non garantisce tempi di esecuzione costanti. Un attaccante ultra-sofisticato con accesso fisico potrebbe misurare i nanosecondi di ritardo per intuire la chiave.
> *Mitigazione*: Abbiamo evitato branch condizionali segreti dove possibile.

> [!FAILURE] **Memory Scrubbing**
> Non possiamo cancellare la RAM a comando (Garbage Collector).
> *Mitigazione*: I sistemi operativi moderni proteggono la memoria dei processi, ma un Cold Boot Attack rimane teoricamente possibile.

in questo caso, non c'è nulla da fare, perché non posso cancellare la RAM a comando. quindi basta sbattere i coglioni sulla tastiera e riscrivilo in python come il good boy che sei.

### Come funziona tutto insieme? [rust vs python](PYTHON_VS_RUST.md)
1. Rust genera le chiavi. (Veloce, sicuro, pulito).
2. Python (il nostro good boy) chiama Rust e dice "Mommy, per favore ciframi questo".
3. Rust esegue il lavoro sporco in memoria protetta.
4. Rust pulisce tutto (`zeroize`) e restituisce solo il risultato cifrato.
5. Python ringrazia e porta il risultato all'utente.

Perfetto equilibrio.
(ah btw ho anche il codice Rust ma mi sbatto troppo i coglioni per metterlo quindi boh, fatevelo da soli invece di segarvi)
ok, ok farò il gentile e vi darò solo il codice rust per ECC, ma fatto come libreria per python :)
```rust
use p256::{
    ecdh::EphemeralSecret,
    PublicKey, SecretKey,
};
use rand_core::OsRng;
use pyo3::prelude::*;
use pyo3::types::PyBytes;
use p256::elliptic_curve::sec1::ToEncodedPoint;

fn internal_generate_keypair() -> (SecretKey, PublicKey) {
    let secret = SecretKey::random(&mut OsRng);
    let public = secret.public_key();
    (secret, public)
}

#[pyfunction]
fn generate_keypair_py(py: Python) -> PyResult<(PyObject, PyObject)> {
    let (secret, public) = internal_generate_keypair();
    let secret_bytes = secret.to_bytes();
    let public_bytes = public.to_encoded_point(true);

    Ok((
        PyBytes::new(py, secret_bytes.as_slice()).into(),
        PyBytes::new(py, public_bytes.as_bytes()).into()
    ))
}

#[pyfunction]
fn derive_shared_secret_py(py: Python, my_secret_bytes: &[u8], other_public_bytes: &[u8]) -> PyResult<PyObject> {
    let my_secret = SecretKey::from_slice(my_secret_bytes)
        .map_err(|e| PyErr::new::<pyo3::exceptions::PyValueError, _>(format!("Invalid secret key: {}", e)))?;
    let other_pub = PublicKey::from_sec1_bytes(other_public_bytes)
        .map_err(|e| PyErr::new::<pyo3::exceptions::PyValueError, _>(format!("Invalid public key: {}", e)))?;

    let shared_secret = p256::ecdh::diffie_hellman(
        my_secret.to_nonzero_scalar(),
        other_pub.as_affine()
    );

    Ok(PyBytes::new(py, shared_secret.raw_secret_bytes()).into())
}

#[pymodule]
fn ecc_rust(_py: Python, m: &PyModule) -> PyResult<()> {
    m.add_function(wrap_pyfunction!(generate_keypair_py, m)?)?;
    m.add_function(wrap_pyfunction!(derive_shared_secret_py, m)?)?;
    Ok(())
}
```