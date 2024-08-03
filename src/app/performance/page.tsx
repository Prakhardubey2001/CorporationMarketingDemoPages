import performanceImg from '../../../public/performance.jpg'
import Prebuild from '@/components/prebuild';

export default function PerformancePage()
{
    return (
        <Prebuild imgData={performanceImg} imgAlt='Performance Page image' title='To serve High Performance Apps' />
    );
}