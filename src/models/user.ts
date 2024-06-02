import pool from '../configs/db';

interface User {
    id?: number;
    email: string;
    password_hash?: string;
    google_id?: string;
    full_name?: string;
    created_at?: Date;
}

class UserModel {
    static async create(user: User): Promise<User> {
        const { email, password_hash, google_id } = user;
        const result = await pool.query(
            'INSERT INTO users (email) VALUES ($1) RETURNING *',
            [email, password_hash, google_id]
        );
        return result.rows[0];
    }

    static async createNewProfile(user: User): Promise<User> {
        const { email, password_hash, google_id } = user;
        const result = await pool.query(
            'INSERT INTO users (email, full_name, password_hash, google_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [email, password_hash, google_id]
        );
        return result.rows[0];
    }

    static async findByEmail(email: string): Promise<User | null> {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        return result.rows[0] || null;
    }

    static async findByGoogleId(google_id: string): Promise<User | null> {
        const result = await pool.query('SELECT * FROM users WHERE google_id = $1', [google_id]);
        return result.rows[0] || null;
    }
}

export default UserModel;
