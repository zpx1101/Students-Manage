var pool = require('./pool');

//查询所有学生
function findAll(handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from xk_student';
            connection.query(sql,function(err,result){
                if(err){
                    throw err;
                }else{
                    handler.call(this,result);
                }
                connection.release();
            });
        }
    });
}

//通过id查询
function findById(id,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = "select * from xk_student where id = ?";
            connection.query(sql,[id],function(err,result){
                if(err){
                    throw err;
                }else{
                    handler.call(this,result);
                }
                connection.release();
            });
        }
    });
}

//删除 id 
function batchDelete(ids,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'delete from xk_student where id in ('+ids.join()+')';
            connection.query(sql,function(err,result){
                if(err){
                    throw err;
                }else{
                    handler.call(this,result);
                }
                connection.release();
            });
        }
    });
}

//修改
function update(id,name,gender,birth,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'update xk_student set name=?,gender=?,birth=? where id=?';
            connection.query(sql,[name,gender,birth,id],function(err,result){
                if(err){
                    throw err;
                }else{
                    handler.call(this,result);
                }
                connection.release();
            });
        }
    });
}

//保存
function save(name,gender,birth,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'insert into xk_student(name,gender,birth) values(?,?,?)';
            connection.query(sql,[name,gender,birth],function(err,result){
                if(err){
                    throw err;
                }else{
                    handler.call(this,result);
                }
                connection.release();
            });
        }
    });
}

module.exports = {
    findAll:findAll,
    findById:findById,
    batchDelete:batchDelete,
    update:update,
    save:save
}