CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255),
  google_id VARCHAR(255) UNIQUE,
  _name VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- {
--     "hasAccount": true,
--     "samlSignIn": "unavailable",
--     "passwordSignIn": false,
--     "mustReverify": false,
--     "loginOptionsToken": "v02:login_options:Ywpxc5zn0JCESDXxDSyfUnQgiOPhM9ikGjDlnLjGhT0pvNTz_3RUK4amRA_Mt2EfTtkjQrmjg6CJ8C5U02M3HudZELeMUm0mjF2OMeiqv-7jzg8PsuSfjW16g5w9G7S_uzmj5C53T4KTb7WYO2AMRRKi2qJhd9kbtS9uvQzWCzLuoE906hW0krY4vsKs8hjwwAowRira5M_Idg",
--     "challengeProvider": "turnstile"
-- }