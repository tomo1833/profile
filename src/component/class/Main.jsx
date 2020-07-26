import React from 'react';
import Progressbar from '../function/Progressbar';
import Blockslide from '../function/Blockslide';

class Main extends React.Component {

    constructor(props) {
        super(props);

        this.block_data = [
            {
                title: '職務経歴',
                block_id: 'industry',
                block_details: [
                    {
                        title_detail: '業種経歴',
                        comment: '<p>客先常駐しながらシステムの構築に携わっています。</p> <p><span class="strong-color strong-color-blue">ファクトリー系システム構築</span>、<span class="strong-color strong-color-blue">オフィス業務系システム構築</span>、および、<span class="strong-color strong-color-blue">コンシューマー向けサイト構築</span>に携わってきました。</p><p>短期～長期案件の経験があり継続的な案件を頂いています。</p><p>最近はコロナの影響によりテレワークによる作業を行っています。</p>',
                        order_flg: false,
                        progress_bars: [
                            {
                                progress_title: '情報処理・提供サービス業 / 出版業',
                                status: '5年以上',
                                percent: 100,
                            },
                            {
                                progress_title: '酒類製造業',
                                status: '3年以上',
                                percent: 80,
                            },
                            {
                                progress_title: '自動車・同附属品製造業 / 移動電気通信業 / 不動産代理業・仲介業 /<br/>不動産賃貸業・管理業 / 銀行（中央銀行を除く）',
                                status: '1年以上',
                                percent: 60,
                            },
                            {
                                progress_title: 'スポーツ施設提供業 / 高等教育機関',
                                status: '1年未満',
                                percent: 40,
                            },
                        ],
                    },
                    {
                        title_detail: '開発経歴',
                        comment: '<p>システム開発の各工程を経験しています。<span class="strong-color strong-color-blue">ウォーターフォール型</span>、<span class="strong-color strong-color-blue">アジャイル型</span>の経験があります。</p><p>近年は保守、追加開発をメインに行っています。</p>',
                        order_flg: true,
                        progress_bars: [
                            {
                                progress_title: 'プログラムコーディング / システム設計 / 保守、追加開発 / テスト',
                                status: '5年以上',
                                percent: 100,
                            },
                            {
                                progress_title: '要件定義',
                                status: '1年以上',
                                percent: 60,
                            },
                            {
                                progress_title: '研究開発',
                                status: '1年未満',
                                percent: 40,
                            },
                        ],
                    },
                    {
                        title_detail: 'マネージメント経歴',
                        comment: '<p>PM(プロジェクトマネージャ)は未経験です。</p><p><span class="strong-color strong-color-blue">リーダー、サブリーダは経験</span>しています。</p><p>案件の最大の規模は200名規模の案件、マネジメント経験人数は10人程度です。</p>',
                        order_flg: false,
                        progress_bars: [
                            {
                                progress_title: '予実管理',
                                status: '5年以上',
                                percent: 100,
                            },
                            {
                                progress_title: 'メンバー育成（OJT、メンター）',
                                status: '3年以上',
                                percent: 80,
                            },
                            {
                                progress_title: 'メンバー採用',
                                status: '1年未満',
                                percent: 40,
                            },
                        ],
                    },
                ],
            },

            {
                title: 'スキル経歴',
                block_id: 'skill',
                block_details:
                    [
                        {
                            title_detail: '言語経歴',
                            comment: '<p>オフィス業務システム構築で長年<span class="strong-color strong-color-blue">Java</span>を使用してきました。</p><p>近年は<span class="strong-color strong-color-blue">PHP</span>がメイン言語です。</p><p>SQL、HTML、CSS、JavaScriptどの案件でも使用します。</p>',
                            order_flg: false,
                            progress_bars: [
                                {
                                    progress_title: 'HTML / CSS / JavaScript / PHP / Java / SQL',
                                    status: '5年以上',
                                    percent: 100,
                                },
                                {
                                    progress_title: 'PL/SQL',
                                    status: '3年以上',
                                    percent: 80,
                                },
                                {
                                    progress_title: 'Python3 / FA-Panel',
                                    status: '1年以上',
                                    percent: 60,
                                },
                                {
                                    progress_title: 'Perl / VB / COBOL / C',
                                    status: '1年以上',
                                    percent: 40,
                                },
                            ],
                        },
                        {
                            title_detail: 'フレームワーク経験',
                            comment: '<p>MVCモデルのフレームワークを主体で利用しています。</p><p>Springは他社製品のパッケージのフレームワークを利用しています。</p><p><span class="strong-color strong-color-blue">新しいフレームワークに慣れる</span>ことは早いです。</p><p>最近はDjangoやLaravelなど独学で勉強しています。</p>',
                            order_flg: true,
                            progress_bars: [
                                {
                                    progress_title: 'Struts / Spring　/ Java EE / Zend Framework / Phalcon / jQuery',
                                    status: '5年以上',
                                    percent: 100,
                                },
                                {
                                    progress_title: 'Seasar2 / ColdFusion',
                                    status: '3年以上',
                                    percent: 80,
                                },
                                {
                                    progress_title: 'Bootstrap',
                                    status: '1年以上',
                                    percent: 60,
                                },
                                {
                                    progress_title: '.NET Framework',
                                    status: '1年未満',
                                    percent: 40,
                                },
                                {
                                    progress_title: 'Django / Laravel',
                                    status: '業務未経験',
                                    percent: 20,
                                }
                            ],
                        },
                        {
                            title_detail: 'その他技術経験',
                            comment: '<p>様々なツールや、IT技術、ミドルウェアを経験してきました。</p><p>ミドルウェアはインストール経験より、<span class="strong-color strong-color-blue">設定ファイルの改修</span>、<span class="strong-color strong-color-blue">プログラム拡張</span>が主な作業になります。</p><p>Dockerの勉強も始めました。</p>',
                            order_flg: false,
                            progress_bars: [
                                {
                                    progress_title: 'Apache / Tomcat / SVN(Subversion)',
                                    status: '5年以上',
                                    percent: 100,
                                },
                                {
                                    progress_title: 'NginX / Flare(Cache) / Vernish / 全文検索',
                                    status: '3年以上',
                                    percent: 80,
                                },
                                {
                                    progress_title: 'CI(Continuous Integration)　/ VMWare / Private Cloud / WebService / SOAP',
                                    status: '1年以上',
                                    percent: 60,
                                },
                                {
                                    progress_title: 'EAI(Enterprise application integration) / BI(Business Inteligence) / git hub',
                                    status: '1年未満',
                                    percent: 40,
                                },
                                {
                                    progress_title: 'Docker / React / デザイン',
                                    status: '業務未経験',
                                    percent: 20,
                                },
                            ],
                        },
                    ],
            },
        ];
        console.log(this.block_data);
    }



    render() {
        return (
            <main className="dark-mode-target light-theme">

                <div id="top" className="block block-top block-slid-01 dark-mode-target light-theme">
                    <div className="container-fluid">
                        <h1 className="d-flex align-items-center justify-content-center">Tomo's profile</h1>
                        <div className="d-flex align-items-center justify-content-center discription">
                            <p>40代ITエンジニアの自己紹介ウェブサイト</p>
                        </div>
                    </div>
                </div>
                <Blockslide block_main={this.block_data} />

                <div id="bottom" className="block block-title block-slid-04 dark-mode-target light-theme">
                    <div className="container-fluid">
                        <h1 className="d-flex align-items-center justify-content-center">Thank you.</h1>
                    </div>
                </div>

            </main >
        )
    }
}

export default Main;