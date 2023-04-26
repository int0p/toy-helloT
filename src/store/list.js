import {writable} from 'svelte/store';
import uuid from 'uuid/v4'

// repo에서 데이터 받아옴.
const repoLists = JSON.parse(window.localStorage.getItem('lists')) || [];

// 받아온데이터 내부에서 사용
const _lists = writable();
_lists.subscribe($lists => {
    // _lists 스토어에 저장된 값이 바뀌면, 그 값을 변수 $lists로 받아 로컬스토리지에 'lists' key로 저장하겠다.
    window.localStorage.setItem('lists',JSON.stringify($lists));
})

//custom store
export const lists ={
    subscribe: _lists.subscribe,//자동구독
    add(payload){
        const{title} = payload; //구조분해로 payload에서 title끄냄.
        _lists.update(
            $lists => {
                $lists.push({
                    id:uuid(),
                    title,
                    card:[]
                })
                return $lists
            }
        )
    }
}