export default {
    state: {
        msg: ['msg 1', 'msg 2', 'msg 3'],
        expMsg: 'Hello'
    },
    getters: {
        get_msg(state){
            return state.msg
        }
    },
    actions: {
        add_new_msg(context, data){
            
            // здесь можем добавлять новое сообщение в БД
            
            context.commit('add_msg', data)
        }
    },
    mutations: {
        add_msg(state, data){
            if (data.msg) {
                state.msg.push(data.msg)
            }
        }
    }
}