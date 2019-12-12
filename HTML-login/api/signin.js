'use strict';

/*module.exports = async ({ login, password }) => {
  if (login === 'admin' && password === '12345') {
    return 'You are in';
  } else {
   return 'Wrong password';
  }
*/

module.exports = async ({ login, password }) => {
   const sql = `SELECT * FROM systemuser where login = '${login}' and password = '${password}'`;
   try {
      const res = await db.query(sql);
      if (res.length) return 'You are in';
      return 'Wrong password';
    } catch (err) {
      logger.error(err.message);
      return 'Wrong password';
    }
  };

