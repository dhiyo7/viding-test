import SidebarLeft from '@/components/SideBarLeft';
import SidebarRight from '@/components/SideBarRight';

export default function Home() {
  return (
    <main className='max-w-7xl p-4 m-auto min-h-screen items-center  grid md:grid-cols-2 gap-4'>
      <section>
        <SidebarLeft />
      </section>
      <section>
        <SidebarRight />
      </section>
    </main>
  );
}
