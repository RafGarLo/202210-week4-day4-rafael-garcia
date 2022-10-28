import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { RobotList } from '../robotlist/robotlist';

export function Layout({ children }: { children: JSX.Element }) {
    return (
        <>
            <Header></Header>
            <RobotList />
            <Footer></Footer>
        </>
    );
}
