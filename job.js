'use strict';
const config = require('./config');
const pg = require('pg');
pg.defaults.ssl = true;

module.exports = {

    updateJobData: function(userId, user_name, job_vacancy, previous_job, years_of_experience, phone_number) {
        var pool = new pg.Pool(config.PG_CONFIG);
        pool.connect(function(err, client, done) {
            if (err) {
                return console.error('Error acquiring client', err.stack);
            }

            let sql1 = `SELECT * FROM job_data WHERE fb_id='${userId}' LIMIT 1`;
            client
                .query(sql1,
                    function(err, result) {
                        if (err) {
                            console.log('Query error: ' + err);
                        } else {
                            let sql;
                            if (result.rows.length === 0) {
                                sql = 'INSERT INTO public.job_data (fb_id, user_name, job_vacancy, previous_job, years_of_experience, phone_number) VALUES ($1, $2, $3, $4, $5, $6)';
                            } else {
                                sql = 'UPDATE public.job_data SET user_name=$2, job_vacancy=$3, previous_job=$4, years_of_experience=$5, phone_number=$6 WHERE fb_id=$1';
                            }
                            client.query(sql,
                            [   
                                userId,
                                user_name,
                                job_vacancy,
                                previous_job,
                                years_of_experience,
                                phone_number
                            ]);
                        }
                    }
                    );
        });
        pool.end();
    }
}