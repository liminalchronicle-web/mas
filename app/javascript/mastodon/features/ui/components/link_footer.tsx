import { Link } from 'react-router-dom';

import { domain, version } from 'mastodon/initial_state';

export const LinkFooter: React.FC<{
  multiColumn: boolean;
}> = ({ multiColumn }) => (
  <div className='link-footer'>
    <p>
      본 서버는{' '}
      <a href='https://crepe.cm/@longwhile/lw5w0ofg' target='_blank' rel='noopener'>
        한참 인스턴스
      </a>
      가 설치되었습니다.
    </p>

    <p>
      <strong>{domain}</strong>{' '}
      <Link
        to='/privacy-policy'
        target={multiColumn ? '_blank' : undefined}
        rel='privacy-policy'
      >
        개인정보처리방침
      </Link>{' '}
      <a href='https://github.com/long-while/longwhile-mastodon' target='_blank' rel='noopener' className='version'>v{version}</a>
    </p>
  </div>
);
