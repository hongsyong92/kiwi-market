import type { NextPage } from "next";
import Layout from "../../components/layout";

const Chats: NextPage = () => {
  return (
    <Layout title="채팅" hasTabBar>
      <div className="divide-y-[1px]">
        {[1, 1, 1, 1, 1, 1].map((_, i) => (
          <div
            className="borter-t flex cursor-pointer items-center space-x-3 px-4 py-3"
            key={i}
          >
            <div className="h-12 w-12 rounded-full bg-slate-300" />
            <div>
              <p className="font-medium text-gray-700">Steve Jebs</p>
              <p className="text-sm font-medium text-gray-500">내일봐요!</p>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Chats;
