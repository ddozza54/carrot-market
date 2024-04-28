import Button from '@components/button';
import useUser from '@libs/client/useUser';
import { NextPage } from 'next';

const Profile: NextPage = () => {
    const { user, isLoading } = useUser();

    return (
        <>
            <h1>내 프로필</h1>
            {isLoading ? <span>프로필을 불러오는 중입니다.</span> :
                <div>
                    <h4>{user?.name}</h4>
                    <Button text='수정하기' onClick={() => alert('준비중 입니다.')} />
                </div>}
        </>
    )

}

export default Profile;