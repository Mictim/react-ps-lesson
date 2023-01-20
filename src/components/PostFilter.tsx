import { FC, useState } from 'react';
import { MyInput } from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

type Filter = {
    sort: string;
    query: string;
}

type PostFilterProps = {
    filter: Filter;
    setFilter: (filter: Filter) => void;
}

const PostFilter: FC<PostFilterProps> = ({ filter, setFilter }) => {

    const [inputState, setInputState] = useState(true);

    return (
        <div>
            <MyInput
                placeholder="Search..."
                value={filter.query}
                disabled={inputState}
                onChange={(event: any) => setFilter({ ...filter, query: event.target.value })}
            />
            <MySelect
                value={filter.sort}
                onChange={
                    selectedSort => {
                        setFilter({ ...filter, sort: selectedSort })
                        setInputState(false)
                    }
                }
                defaultValue='Sort By'
                options={[{ name: 'title', value: 'title' }, { name: "description", value: "body" }]}
            />
        </div>
    )
}

export default PostFilter